
interface Props {
    children: JSX.Element | JSX.Element[];
}

const NoLayout = (props : Props) => {
    const {children} = props;

    return (
        <>
            {children}
        </>
    );
};

export default NoLayout;
