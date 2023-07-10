

const Header = (props) => {
    const pageTitle = props.title;
    return (
        <header className=" bg-sky-800">
            <h1 className="font-mono text-2xl text-white text-center font-extrabold p-5">{pageTitle}</h1>
        </header>
    );
};

export default Header;