import React, { Component } from 'react';
import { TailSpin } from 'react-loader-spinner';
import s from './Loader.modulle.css';

class Loader extends Component {
  render() {
    return (
      <div className={s.loaderBox}>
        <TailSpin
          height="120"
          width="120"
          timeout={5000}
          color="#660099"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        ss
      </div>
    );
  }
}

export default Loader;
