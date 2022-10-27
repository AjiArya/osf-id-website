import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectsSection = class extends React.Component {
    
    render() {
        const settings = {
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 4,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            responsive: [
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                  }
                },
                {
                    breakpoint: 767,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      infinite: true
                    }
                  },
                  {
                    breakpoint: 350,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      infinite: true,
                      centerMode: false
                    }
                  }
              ]
        };
        return (
            <div className="container">
                <link rel="stylesheet" href="/styles/slider.css"></link>
                <h2 className="home-v2-header home-v2-community-header">We Build <span className="home-v2-header-red">Communities Who Write Software</span> That Runs In Production</h2>
                <p className="home-v2-community-paragraph">We do this by bringing together developers, operators, and organizations in an open way, guided by a set of principles we call the Four Opens (open source, design, development, community). All of our projects have a strategic focus, vision & scope that supports the development and adoption of production infrastructure with open source components.</p>
                <p className="home-v2-community-paragraph">We can help with your open source project. Our model and project services provides the tooling, guidance, and collaborative environment that allows communities to focus their attention on the important work of building and operating software that solves real problems around the globe.</p>
                <div className="home-v2-projects-container">
                    <Slider {...settings}>
                        <a href="/projects/">
                            <div className="home-v2-project-box">
                                <div className="home-v2-project">
                                    <img src="/img/homeV2/project-logos/kata.svg" />
                                    <h3 className="home-v2-project-title">Kata Containers</h3>
                                    <p className="home-v2-project-text">Secure, lightweight CRI compatible virtualized containers.</p>
                                </div>
                            </div>
                        </a>
                        <a href="/projects/">
                            <div className="home-v2-project-box">
                                <div className="home-v2-project">
                                    <img src="/img/homeV2/project-logos/starlingx.svg" />
                                    <h3 className="home-v2-project-title starlingx-project-title">StarlingX</h3>
                                    <p className="home-v2-project-text">Edge cloud computing infrastructure for high performance, ultra-low latency applications.</p>
                                </div>
                            </div>
                        </a>
                        <a href="/projects/">
                            <div className="home-v2-project-box">
                                <div className="home-v2-project">
                                    <img src="/img/homeV2/project-logos/openstack.svg" />
                                    <h3 className="home-v2-project-title">OpenStack</h3>
                                    <p className="home-v2-project-text">Programmable infrastructure for VMs, containers and bare metal.</p>
                                </div>
                            </div>
                        </a>
                        <a href="/projects/">
                            <div className="home-v2-project-box">
                                <div className="home-v2-project">
                                    <img src="/img/homeV2/project-logos/airship.svg" />
                                    <h3 className="home-v2-project-title airship-project-title">Airship</h3>
                                    <p className="home-v2-project-text">Making lifecycle management for open infrastructure simple, repeatable & resilient.</p>
                                </div>
                            </div>
                        </a>
                        <a href="/projects/">
                            <div className="home-v2-project-box">
                                <div className="home-v2-project">
                                    <img src="/img/homeV2/project-logos/oilabs.svg" />
                                    <h3 className="home-v2-project-title">OpenInfra Labs</h3>
                                    <p className="home-v2-project-text">CI/CD platform for gating changes across multiple systems/repos.</p>
                                </div>
                            </div>
                        </a>
                        <a href="/projects/">
                            <div className="home-v2-project-box">
                                <div className="home-v2-project">
                                    <img src="/img/homeV2/project-logos/kata.svg" />
                                    <h3 className="home-v2-project-title">Kata Containers</h3>
                                    <p className="home-v2-project-text">Secure, lightweight CRI compatible virtualized containers.</p>
                                </div>
                            </div>
                        </a>
                        <a href="/projects/">
                            <div className="home-v2-project-box">
                                <div className="home-v2-project">
                                    <img src="/img/homeV2/project-logos/starlingx.svg" />
                                    <h3 className="home-v2-project-title starlingx-project-title">StarlingX</h3>
                                    <p className="home-v2-project-text">Edge cloud computing infrastructure for high performance, ultra-low latency applications.</p>
                                </div>
                            </div>
                        </a>
                        <a href="/projects/">
                            <div className="home-v2-project-box">
                                <div className="home-v2-project">
                                    <img src="/img/homeV2/project-logos/openstack.svg" />
                                    <h3 className="home-v2-project-title">OpenStack</h3>
                                    <p className="home-v2-project-text">Programmable infrastructure for VMs, containers and bare metal.</p>
                                </div>
                            </div>
                        </a>
                        <a href="/projects/">
                            <div className="home-v2-project-box">
                                <div className="home-v2-project">
                                    <img src="/img/homeV2/project-logos/airship.svg" />
                                    <h3 className="home-v2-project-title airship-project-title">Airship</h3>
                                    <p className="home-v2-project-text">Making lifecycle management for open infrastructure simple, repeatable & resilient.</p>
                                </div>
                            </div>
                        </a>
                        <a href="/projects/">
                            <div className="home-v2-project-box">
                                <div className="home-v2-project">
                                    <img src="/img/homeV2/project-logos/oilabs.svg" />
                                    <h3 className="home-v2-project-title">OpenInfra Labs</h3>
                                    <p className="home-v2-project-text">CI/CD platform for gating changes across multiple systems/repos.</p>
                                </div>
                            </div>
                        </a>
                    </Slider>
                </div>
                <div className="home-v2-community-btn-container">
                    <a href="">
                        <div className="home-v2-community-btn home-v2-community-btn-primary">
                            About Project Hosting
                        </div>
                    </a>
                    <a href="">
                        <div className="home-v2-community-btn">
                            See All Projects
                        </div>
                    </a>
                </div>
            </div>
        );
      }
}

export default ProjectsSection