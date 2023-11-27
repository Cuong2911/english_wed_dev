
interface Props {
    children: JSX.Element | JSX.Element[];
}

const index = (props : Props) => {
    const {children} = props;

    return (
        <>
            {children}
        </>
    );
};

export default index;
