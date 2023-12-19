import { useEffect, useState } from 'react';

const Blog = () => {

    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@machado.profile');
                const data = await res.json();
                const items = data.items;
                setItems(items);
                console.log(items)
            } catch {
                setError(true);
            }
        }

        fetchData();
    }, []);

    return (
        <section
            id="blog"
            data-nav-tooltip="Blog"
            className="pp-section pp-scrollable section dark-bg">
            <div>
                <section className="container">
                    <div className="title">
                        <h3 id="blog">My Medium.</h3>
                    </div>
                    <ul>
                        {items.map((item, index) => (
                            <div key={index}>
                                <a href={item.link} >
                                    <h3>{item.title}</h3>
                                </a>
                            </div>
                        ))}
                    </ul>
                    <a href={"https://machado.profile.medium.com/"}
                    >
                        Read More on Medium
                    </a>
                </section>
            </div>
        </section>
    );
};
export default Blog;