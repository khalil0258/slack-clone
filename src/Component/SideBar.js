import React, { useEffect } from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import SideBarOption from "./SideBarOption";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import { useCollection } from "react-firebase-hooks/firestore";
import { db, firebaseapp } from "../firebase";
import { collection } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { enterRoom } from "../features/appSlice";
function SideBar() {
  const collectionRef = collection(db, "rooms");
  const [channels, loading, error] = useCollection(collectionRef);
  //   console.log(channels?.docs[0].data().name);

  return (
    <SideBarContainer>
      <SideBarHeader>
        <SideBarInfo>
          <h2>Slack</h2>
          <h3>
            <FiberManualRecordIcon />
            Khalil Hadjaz
          </h3>
        </SideBarInfo>
        <CreateIcon />
        {/* sidebar option */}
      </SideBarHeader>
      <SideBarOption Icon={InsertCommentIcon} title="Threads" />
      <SideBarOption Icon={InboxIcon} title="Mention & reaction" />
      <SideBarOption Icon={DraftsIcon} title="Saved items" />
      <SideBarOption Icon={BookmarkBorderIcon} title="Channel browser" />
      <SideBarOption Icon={PeopleAltIcon} title="People & user groups" />
      <SideBarOption Icon={AppsIcon} title="Apps" />
      <SideBarOption Icon={FileCopyIcon} title="File browser" />
      <SideBarOption Icon={ExpandLessIcon} title="Show less" />
      <hr />
      <SideBarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SideBarOption
        Icon={AddIcon}
        AddChannelOption={true}
        title="Add Channels"
      />
      {channels?.docs.map((doc) => (
        <SideBarOption key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </SideBarContainer>
  );
}

export default SideBar;

const SideBarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  border-top: 1px solid #49274b;
  margin-top: 46px;
  flex: 0.3;
  max-width: 260px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  hr {
    margin: 10px 0;
    border: 1px solid #49274b;
  }
`;
const SideBarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;
  /* justify-content: space-between;
  align-items: center; */
  > .MuiSvgIcon-root {
    color: #49274b;
    font-size: 35px;
    padding: 8px;
    background-color: white;
    border-radius: 999px;
  }
`;
const SideBarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }
  > h3 > .MuiSvgIcon-root {
    color: green;
    margin-top: 1px;
    margin-right: 2px;
    font-size: 14px;
  }
`;
