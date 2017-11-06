/*
 * The index/main page after you log in
 * */

import React from "react";

import {Actions} from "../data/PetbookActions";
import Navbar from "./Navbar";
import SideBarView from "./SideBarView";
import WallView from "./WallView";
import ChatView from "./ChatView";

function MainView(props) {
    const auth_data = props.main_store.get("auth");
    const posts_data = props.main_store.get("posts_data");

    /* get all posts */
    return (
	<div>
	  <Navbar logo="img" login={false} auth={auth_data} />
	  <div id="clear-navbar"></div>
	  <div className="container" id="main-container">
	    <div className="col-md-2">
	      <SideBarView />
	    </div>
	    <div className="col-md-7">
	      <WallView posts_data={posts_data} />
	    </div>
	    <div className="col-md-3" id="chat-area">
	      <ChatView />
	    </div>
	  </div>
	</div>
    );
}

export default MainView;