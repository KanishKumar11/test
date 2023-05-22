import React from "react";
import { withRouter } from "next/router";
import Link from "next/link";
import tstyles from "../styles/tailwind.module.css"

class Logo extends React.Component {
    render() {
        return (
            <div>
                <Link href={"/"} className="flexRow paragraph02 sitelogo"><img src={"/images/cttm-logo.png"} alt="Logo" width='60px' height='60px' className={tstyles.tmr} />Chiatothemoon
                </Link>
            </div>
        );
    }
}

export default withRouter(Logo);

