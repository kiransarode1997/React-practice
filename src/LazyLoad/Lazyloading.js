import React, { Component } from 'react'

export default class Lazyloading extends Component {
  render() {
    return (
      <div>Lazyloading</div>
    )
  }
}



// let Lazyloading = lazy(() => import("./LazyLoad/Lazyloading"));
// let About = lazy(() => import("./LazyLoad/About"));



{/* <Suspense fallback={<div>please wait</div>}>
<Lazyloading />
</Suspense>
<Suspense fallback={<div>please wait,,,,,,,,,,,,........</div>}>
<About />
</Suspense> */}