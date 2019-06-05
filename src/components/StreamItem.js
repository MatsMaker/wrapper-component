import React, { PureComponent } from 'react';
import './StreamItem.css';
import StreamDetail from './StreamDetail';


export default class StreamItem extends PureComponent {

  constructor(...args) {
    super(...args);

    this.state = {
      modalShow: false
    };
  }

  render() {
    const s = this.props.stream;
    const modalClose = () => this.setState({ modalShow: false });
    return (
      [
        <div className="streamItem"
          key='0'
          onClick={() => this.setState({ modalShow: true })}>
          <img className="streamItem-img" src={s.image} alt={s.game} />
        </div>,
        <StreamDetail // We remember what bootstrap modal is once on doom )... but I think it is not the best way for this modal window
          key='1'
          stream={s}
          show={this.state.modalShow}
          onHide={modalClose}
        />
      ]
    );
  }
}