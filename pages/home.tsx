import EmployeeForm from "@components/EmployeeForm";
import {
  createTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
  InputAdornment,
} from "@material-ui/core";
import {
  Add as AddIcon,
  Close as CloseIcon,
  EditOutlined as EditOutlinedIcon,
  Search as SearchIcon,
} from "@material-ui/icons";
import Controls from "@components/controls/Controls";
import { useState } from "react";
import Popup from "@components/Popup";
import Navbar from "@components/Navbar";
import ConfirmDialog from "@components/ConfirmDialog";
const theme = createTheme({
  palette: {
    primary: {
      main: "#21F9AE",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#f4f5fd",
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
      },
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});

function Home() {
  const classes = useStyles();
  const [openPopup, setOpenPopup] = useState(true);
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: true,
    title: "Save Changes",
    subTitle: "",
    onConfirm: () => {
      console.log("confirmed");
    },
  });
  const addOrEdit = (employee: any, resetForm: any) => {
    // if (employee.id === 0) {
    //   employeeService.insertEmployee(employee);
    // } else {
    //   employeeService.updateEmployee(employee);
    // }
    console.log(employee);
    resetForm();
    // setRecordForEdit(null);
    // setOpenPopup(false);
    // setRecords(employeeService.getAllEmployees());
    // setNotify({
    //   isOpen: true,
    //   type: 'success',
    //   message: 'Submitted Successfully',
    // });
  };
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.appMain}>
        <Navbar />
        {/* <div>
          <Controls.Button
            text="Add New"
            variant="outlined"
            startIcon={<AddIcon />}
            className={classes.addButton}
            onClick={() => {
              // setRecordForEdit(null);
              setOpenPopup(true);
            }}
          />
          <Popup
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
            title="Employee Form"
          >
            <EmployeeForm recordForEdit={null} addOrEdit={addOrEdit} />
          </Popup>
        </div> */}
        <div
          style={{
            marginTop: "70px",
          }}
        >
          <Controls.Button text="Back" variant={"contained"}></Controls.Button>
        </div>
        <div className={classes.container}>
          <div className="top">
            <Controls.Input
              placeholder="Enter name, email or user group"
              className={classes.search}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              onChange={(e: any) => {
                let target = e.target;
                // setFilterFn({
                //   fn: items => {
                //     if (target.value === '') {
                //       return items;
                //     } else {
                //       return items.filter(x =>
                //         x.fullName.toLowerCase().includes(target.value)
                //       );
                //     }
                //   },
                // });
              }}
            />
            <Controls.Button
              text="Cancel"
              variant={"text"}
              color="black"
            ></Controls.Button>
            <Controls.Button
              text="Next"
              variant={"contained"}
              onClick={() => {
                setConfirmDialog({
                  isOpen: true,
                  title: "Save Changes",
                  subTitle: "",
                  onConfirm: confirmDialog.onConfirm,
                });
              }}
            ></Controls.Button>
          </div>
          <div className={classes.bottom}>
            <ConfirmDialog
              confirmDialog={confirmDialog}
              setConfirmDialog={setConfirmDialog}
            />
            <div className={classes.inputBox}>
              <p className="name">Looper's Name</p>
              <input placeholder="Looper" />
            </div>
            <div className={classes.inputBox}>
              <p className="name">Looper's Name</p>
              <input placeholder="Looper" />
            </div>
            <div className={classes.inputBox}>
              <p className="name">Looper's Name</p>
              <input placeholder="Looper" />
            </div>
            <div className={classes.inputBox}>
              <p className="name">Looper's Name</p>
              <input placeholder="Looper" />
            </div>
          </div>
          <div className={classes.dummy}>
            <p className="top">this is at top</p>
          </div>
          <div className={classes.insideDummy}>
            <p className="top">this is at top</p>
          </div>
        </div>
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default Home;
const useStyles = makeStyles({
  dummy: {
    "& .top": {
      color: "red",
    },
  },
  insideDummy: {},
  appMain: {
    width: "100%",
  },
  addButton: {
    position: "absolute",
    right: "10px",
  },

  container: {
    borderRadius: "4px",
    border: "1px solid #A09E9E",
    width: "80%",
    margin: "auto",
    minHeight: "80vh",

    "& .top": {
      padding: "1rem",
      borderBottom: "2px solid #DDDDDD",
      display: "flex",
    },
  },
  search: {
    background: "#E0E0E0",
    width: "50%",
    marginRight: "auto",

    "& .MuiSvgIcon-root": {
      transform: "rotate(90deg)",
    },
    "& *": {
      border: "none",
      outline: "none",
    },
  },
  bottom: {},
  inputBox: {
    // border: "1px solid red",
    padding: "1rem",
    "& .name": {
      fontWeight: "bold",
      marginBottom: ".5rem",
      fontSize: "1.1rem",
    },
    "& input": {
      width: "80%",
      padding: ".7rem",
      borderRadius: "4px",
      border: "1px solid #DDDDDD",
      outline: "none",
    },
  },
});
