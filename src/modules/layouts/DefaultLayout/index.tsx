import { Footer, Navbar } from "../components";

interface Props {
    children: JSX.Element | JSX.Element[];
}

const index = (props : Props) => {
    const {children} = props;

    return (
        <>
            <Navbar/>
                {children}
            <Footer/>
        </>
    );
};

export default index;
