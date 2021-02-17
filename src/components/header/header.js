import './header.css';

export default function Header(props) {
    let listCategory = props.categories.map((category, index) => 
        <li className="liStyle" key={index}><a href="#"> {category} </a></li>
    );
    return (
        <ul className='ulStyle'>{listCategory}</ul>
    );
}