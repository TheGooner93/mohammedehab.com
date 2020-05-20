import React from "react";
import classNames from 'classnames';
import { connect } from "react-redux";
import { Link } from "gatsby";
import { Card } from "react-bootstrap";

const BlogCardContainer = (props) => {

    const { post = '', theme = '' } = props;

    const cardView = (
        <div className="blog-card-wrapper">
            <Link
                to={post.node.fields.slug}
                style={{ textDecoration: "none" }}
            >
                <Card
                    className={classNames('blog-card text-white', theme === 'night' ? 'blog-card_dark' : '')}
                    style={{
                        backgroundImage: `url(${post.node.frontmatter.thumbnail})`,
                        backgroundSize: 'cover',
                        backgroundPosition: "center",
                    }}
                >
                    <Card.Body className="blog-card_blur">
                        <Card.Title>
                            <h3>{post.node.frontmatter.title}</h3>
                        </Card.Title>
                        <Card.Text>
                            {post.node.frontmatter.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );

    return cardView;
};

const mapStateToProps = state => ({
    theme: state.theme.theme,
});

export default connect(mapStateToProps, {})(BlogCardContainer);
