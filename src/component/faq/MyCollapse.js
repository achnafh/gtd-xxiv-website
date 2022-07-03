import {Button, Collapse} from "react-bootstrap";
import triangle from "./img/triangle.png";

const MyCollapse = ({open, setOpen, buttonText, collapseText}) => {
    return (
        <>
            <div className="collapse-container">
                <div className="mb-2 text-center">
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={() => {
                            setOpen(!open);
                        }}
                        aria-controls="collapse-text-one"
                        aria-expanded={open}
                    >
                        {buttonText}

                        <img src={triangle} alt="" className={"triangle" + (open ? " active" : "")}/>
                    </Button>
                </div>
            </div>


            <Collapse in={open}>
                <div id="collapse-text-one" className="collapse-text-general">
                    {collapseText}
                </div>
            </Collapse>
        </>
    );
}

export default MyCollapse