import { Footer, Navbar } from "../components";

interface Props {
    children: JSX.Element | JSX.Element[];
    itemActive: string;
}

const DefaultLayout = (props : Props) => {
    const {children,itemActive} = props;

    return (
        <>
            <Navbar itemActive={itemActive}/>
                {children}
            <Footer/>
        </>
    );
};

export default DefaultLayout;
