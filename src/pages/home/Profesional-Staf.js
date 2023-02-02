import { GroupPeople, CreativeSvg, GlobeSvg, OutlineDashStaff, GlobelSvg } from "../../assets/svg"
import image1 from "../../assets/image/join-party-img.png";
import Globe from 'react-globe.gl';
import * as THREE from 'three'
import React, { useEffect, useRef } from "react";
const ProfesionalStaff = (props)=>{
    const { useEffect, useRef } = React;
    
    // custom globe material
    const globeMaterial = new THREE.MeshPhongMaterial();
    globeMaterial.bumpScale = 10;
    new THREE.TextureLoader().load('//unpkg.com/three-globe/example/img/earth-water.png', texture => {
      globeMaterial.specularMap = texture;
      globeMaterial.specular = new THREE.Color('grey');
      globeMaterial.shininess = 15;
    });


    const N = 20;
    const camera = new THREE.PerspectiveCamera( 45, 500 / 500, 1, 3000 );
    const arcsData = [...Array(N).keys()].map(() => ({
        startLat: (Math.random() - 0.5) * 180,
        startLng: (Math.random() - 0.5) * 360,
        endLat: (Math.random() - 0.5) * 180,
        endLng: (Math.random() - 0.5) * 360,
        color: [['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)], ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]]
    }));
    const globeEl = useRef();

      useEffect(() => {

        globeEl.current.controls().enableZoom = false;
        globeEl.current.controls().autoRotate = true;
        setTimeout(() => { // wait for scene to be populated (asynchronously)
          const directionalLight = globeEl.current.scene().children.find(obj3d => obj3d.type === 'DirectionalLight');
          directionalLight && directionalLight.position.set(1, 1, 1); // change light position to see the specularMap's effect
        });
      }, []);

      const sendMail = ()=>{
        window.location = 'mailto:info@e-gconsulting.com'
      }
    return (
        <div className="w-screen md:h-auto px-8 md:px-24 flex items-center justify-center my-16 md:my-24  overflow-hidden">
            <div className="md:grid-cols-2 h-auto grid-cols-1 grid gap-16">
                <div className="flex relative items-center justify-center">
                {/* <img src={GlobeSvg} alt="" /> */}
                <Globe
                    ref={globeEl}
                    globeMaterial={globeMaterial}
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                    arcsData={arcsData}
                    arcColor={'color'}
                    width={600}
                    waitForGlobeReady={true}
                    showAtmosphere={false}
                    height={600}
                    camera={camera}
                    backgroundColor="#b2cb9e"
                    arcDashLength={() => Math.random()}
                    arcDashGap={() => Math.random()}
                    arcDashAnimateTime={() => Math.random() * 4000 + 500}
                    />
                </div>
                <div className="flex h-auto items-start space-y-2 flex-col ">
                    <img src={OutlineDashStaff} alt="" />
                    <h1 className="tahoma-bold text-4xl text-eglobe-green"  >
                        Our professional staff in Every Country will help in your {" "}
                        <span className="text-eglobe-orange">Business</span>
                    </h1>
                    <div className="inter-regular text-base"  >E-globe is aware that the core of a business is its people. When it comes to managing people, diversity exists to widen a company’s horizons of thought. With that being said, E-globe is determined to source people from multiple cultural backgrounds across the globe. We have a team full of motivated individuals from the United States, Malaysia, Vietnam, Indonesia, Australia, Europe, and many other countries. We always encourage our team members to express their ideas without being confined by prejudice. E-globe truly embraces and actualizes unity in diversity through a diverse organizational structure.</div>
                    <div className="grid grid-cols-1 md:grid-cols-2  my-4  gap-8">
                        <div className="flex flex-row space-x-4"  >
                            <div className="flex-none flex items-center justify-center">
                                <img src={GroupPeople} alt="" />
                            </div>
                            <div className="flex-grow space-y-1 flex-col flex">
                                <div className="inter-bold text-eglobe-orange text-base">Profesional Team</div>
                                <div className="inter-regular">Team members from multiple countries and continents.</div>
                            </div>
                        </div>
                        <div className="flex flex-row space-x-4"  >
                            <div className="flex-none flex items-center justify-center">
                                <img src={CreativeSvg} alt="" />
                            </div>
                            <div className="flex-grow space-y-1 flex-col flex">
                                <div className="inter-bold text-eglobe-orange text-base">Creative and Innovation</div>
                                <div className="inter-regular">Ideation based on consensual brainstorming.</div>
                            </div>
                        </div>
                    </div>
                    <div className="inter-regular text-base"  >Our responsibility is to educate and share the best of our expertise to stimulate our client’s business growth. The best talents across the globe gather in E-globe only to help SMEs expand their market share or even transform their businesses whenever necessary.</div>
                    <br />
                    <br />
                    <div className="mt-24"  >
                    <button onClick={sendMail} className="py-3 px-8 rounded-md bg-eglobe-green text-white inter-regular text-sm">
                        Start a New Project Together
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfesionalStaff;