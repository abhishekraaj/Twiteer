import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PublicIcon from "@mui/icons-material/Public";
import CloseIcon from "@mui/icons-material/Close";
import ImageIcon from "@mui/icons-material/Image";
import GifBoxIcon from "@mui/icons-material/GifBox";
import { MdOutlinePoll } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import { TbCalendarStats } from "react-icons/tb";
import { AiOutlineDown } from "react-icons/ai";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import TextButtonStyle from "./TextButton.module.css";

export default function TweetButton() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={TextButtonStyle.btn}>
      <Button
        style={{ color: "white", padding: "1em", fontWeight: "bolder" }}
        onClick={handleClickOpen}
      >
        Tweet
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <CloseIcon onClick={handleClose} autoFocus />

        <DialogTitle id="alert-dialog-title">
          <div style={{ marginTop: "0.8em", display: "flex" }}>
            <AccountCircleIcon style={{ fontSize: "3em" }} />
            <span
              style={{
                color: "blue",
                marginTop: "0.05em",
                border: "1px solid ",
                width: "7em",
                fontSize: "0.9em",
                borderRadius: "4em",
                height: "1.3em",
                paddingLeft: "1em",
                fontFamily: "monospace",
              }}
            >
              Everyone
              <AiOutlineDown />{" "}
            </span>
          </div>
        </DialogTitle>
        <DialogContent>
          <div className={TextButtonStyle.foucs}>
            <textarea
              placeholder="Whats Happening ?"
              style={{ width: "30em", height: "6em", border: "none" }}
            />
            <button>
              <PublicIcon style={{ fontSize: "1.8em" }} />
              <sup style={{ fontSize: "1.1em" }}>Everyone can reply</sup>
            </button>
            <hr />
          </div>
        </DialogContent>

        <DialogActions>
          <div className={TextButtonStyle.dialohbottom}>
            <div className={TextButtonStyle.icons}>
              <ImageIcon />
              <GifBoxIcon />
              <MdOutlinePoll style={{ fontSize: "1.5em" }} />
              <InsertEmoticonIcon />
              <TbCalendarStats style={{ fontSize: "1.5em" }} />
              <TfiLocationPin style={{ fontSize: "1.5em" }} />
            </div>

            <Button onClick={handleClose} autoFocus>
              Tweet
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
