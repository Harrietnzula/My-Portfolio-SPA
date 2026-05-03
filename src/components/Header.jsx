const Header = () => {
    return (
        <header className="app-header" style={{ backgroundColor: '#333', color: 'white', padding: '2rem', paddingTop: '1rem', paddingBottom: '1rem', textAlign: 'center', fontFamily: 'Times New Roman, Monserrat' }}>
            <h1 className="app-title" style={{ margin: 0, fontSize: '2rem', fontWeight: 'bold' }}>Harriet's Project Portfolio</h1>
            <p className="app-description" style={{ margin: 0, fontSize: '1.25rem' }}>Showcasing my creative projects and designs</p>
        </header>
    );
}

export default Header;