"use client"
import React from 'react';
import CountUp from 'react-countup';

const AchievementCounter1 = () => {
    return (
        <>
            <div className="achivement-counter">
                <ul>
                    <li>
                        <div className="icon">
                            <i className="flaticon-handshake"></i>
                        </div>
                        <div className="fun-fact">
                            <div className="counter">
                                <div className="timer"><CountUp end={500} enableScrollSpy /></div>
                                <div className="operator">+</div>
                            </div>
                            <span className="medium">Business advices given over 12 years</span>
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <i className="flaticon-employee"></i>
                        </div>
                        <div className="fun-fact">
                            <div className="counter">
                                <div className="timer"><CountUp end={10} enableScrollSpy /></div>
                                <div className="operator">+</div>
                            </div>
                            <span className="medium">Prestigious Awards in Accounting and Finance Excellence.</span>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default AchievementCounter1;