import React from 'react';

class Advertisement extends React.Component {

    constructor(props) {
        super(props);
        this.id = this.props.id;
    }

    componentDidMount() {
        this.appendHelmetScript();
        this.appendDivScript();
    }

    appendHelmetScript() {
        let s       = document.createElement('script');
        s.type      = 'text/javascript';
        s.innerHTML = `
        googletag.cmd.push(function() {
            var slot = googletag.defineSlot('${this.props.name}', ${this.props.size}, '${this.id}')
                .addService(googletag.pubads());

            slot.oldRenderEnded = slot.renderEnded;
            slot.renderEnded = function(om){
                slot.oldRenderEnded();
            };
            
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
        });
        `;
        document.head.appendChild(s);
    }

    appendDivScript() {
        let s       = document.createElement('script');
        s.type      = 'text/javascript';
        s.innerHTML = `
        googletag.cmd.push(function() {
            googletag.display('${this.id}');
        });
        `;
        this.instance.appendChild(s);
    }

    render() {
        return (
            <div id={this.id} ref={(el) => (this.instance = el)}/>
        );
    }
}

export default Advertisement;