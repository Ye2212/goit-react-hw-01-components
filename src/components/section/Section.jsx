import PropTypes from "prop-types";
import './Section.css';


export default function Section ( {title, children} ) {
    return (
        <section className="section">
            {title && <h2 className="section__title">{title}</h2>}
            {children}
        </section>

    )
}

Section.prototype = {
    title: PropTypes.string,
    children: PropTypes.node,
}