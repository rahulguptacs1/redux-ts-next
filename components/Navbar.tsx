import { makeStyles } from "@material-ui/core";
import {
  Add as AddIcon,
  Close as CloseIcon,
  EditOutlined as EditOutlinedIcon,
} from "@material-ui/icons";
interface NavbarPropTypes {}
const Navbar: React.FC<NavbarPropTypes> = ({}) => {
  const classes = useStyles();

  return (
    <div className={classes.navbar}>
      <div className="logo"></div>
      <div className="items">
        <div className="item">
          <AddIcon />
        </div>
        <div className="item">
          <AddIcon />
        </div>
        <div className="item">
          <div className="image"></div>
          <p className="text">Account</p>

          <AddIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const useStyles = makeStyles({
  navbar: {
    position: "fixed",
    top: 0,
    height: "70px",
    width: "100%",
    background: "white",
    filter: "drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25))",
    display: "flex",
    "& .logo": {
      flexBasis: "250px",
      background: "red",
    },
    "& .items": {
      border: "2px solid red",
      display: "flex",
      flex: 1,
      justifyContent: "flex-end",

      "& .item": {
        border: "1px solid #F5F6F9",

        background: "white",
        padding: "0 1rem",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        "& .image": {
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          background: "green",
        },
      },
    },
  },
});
