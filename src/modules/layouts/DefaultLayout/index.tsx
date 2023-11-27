import { Footer, Navbar } from "../components";

interface Props {
    children: JSX.Element | JSX.Element[];
}

const DefaultLayout = (props : Props) => {
    const {children} = props;

    return (
        <>
            <Navbar/>
                {children}
            <Footer/>
        </>
    );
};

export default DefaultLayout;
