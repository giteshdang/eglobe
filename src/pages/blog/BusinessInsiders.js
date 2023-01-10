import {
    CircleDashPinkSvg,
    CirclePinkSvg,
    CircleRedSvg,
  } from "../../assets/svg";
  import { fadeInRight, fadeInLeft } from "react-animations";
  import { StyleSheet, css } from "aphrodite";
  import serviceImg from "../../assets/png/service.png";
  import "./Home.scss";
  import { useCallback, useEffect } from "react";
  const BusinessInsiders = (props) => {
    // const circle = useCallback(() => {
    //   var Emblem = {
    //     init: function (el, str) {
    //       var element = document.querySelector(el);
    //       var text = str ? str : element.innerHTML;
    //       element.innerHTML = "";
    //       for (var i = 0; i < text.length; i++) {
    //         var letter = text[i];
    //         var span = document.createElement("span");
    //         var node = document.createTextNode(letter);
    //         var r = (360 / text.length) * i;
    //         var x = (Math.PI / text.length).toFixed(0) * i;
    //         var y = (Math.PI / text.length).toFixed(0) * i;
    //         span.appendChild(node);
    //         span.style.webkitTransform =
    //           "rotateZ(" + r + "deg) translate3d(" + x + "px," + y + "px,0)";
    //         span.style.transform =
    //           "rotateZ(" + r + "deg) translate3d(" + x + "px," + y + "px,0)";
    //         element.appendChild(span);
    //       }
    //     },
    //   };
    //   Emblem.init(".emblem");
    // });
    // useEffect(() => {
    //   circle();
    // }, [circle]);
    
    return (
      <div className="h-screen blog--top--banner">
        <div className="blog-page-content mx-auto">
          <div className="blog-content-left pt-16">
            <div className="blog--content--body">
              <div className="blog--title">
                <h1><em>Business Insiders</em></h1>
              </div>
              <div className="blog--text" style={{marginLeft : "0"}}>
                <p>Put a brief description and/or explanation here:</p>
              </div>
            </div>
          </div>
          <div className="blog-content-right">
            <div className="blog-list eglobe-bg-light-purple pt-16">
              <div className="blog--content--body">
                <div className="blog--title">
                  <h2>Blog 1 Title</h2>
                </div>
                <div className="blog--text">
                  <p>Date:</p>
                </div>
              </div>
            </div>
            <div className="blog-list eglobe-bg-dark-purple">
              <div className="blog--content--body">
                <div className="blog--title">
                  <h2>Blog 2 Title</h2>
                </div>
                <div className="blog--text">
                  <p>Date:</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const styles = StyleSheet.create({
    fadeInLeft: {
      animationName: fadeInLeft,
      animationDuration: "3s",
    },
    fadeInRight: {
      animationName: fadeInRight,
      animationDuration: "3s",
    },
  });
  
  export default BusinessInsiders;
  