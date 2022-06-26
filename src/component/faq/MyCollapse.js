import {Button, Collapse} from "react-bootstrap";

const CollapseOne = ({open, setOpen, buttonText, collapseText}) => {
    return (
        <>
            <div className="mb-2 text-center">
                <Button
                    variant="primary"
                    size="lg"
                    onClick={() => setOpen(!open)}
                    aria-controls="collapse-text-one"
                    aria-expanded={open}

                >
                    {buttonText}
                </Button>
            </div>

            <Collapse in={open}>
                <div id="collapse-text-one" className="collapse-text-general">
                    {collapseText}
                </div>
            </Collapse>
        </>
    );
}

export default CollapseOne