import React from "react";
import classNames from 'classnames';
import { connect } from "react-redux";
import { Card } from "react-bootstrap";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import {randomColor} from 'randomcolor';

const BlogCardContainer = (props) => {

    const { post = '', theme = '' } = props;

    const cardView = (
        <div className="blog-card-wrapper">
            <AniLink
                cover bg={theme === 'night' ? '#2c3e50' : ''}
                to={post.node.fields.slug}
                style={{ textDecoration: "none" }}
            >
                <Card
                    className={classNames('blog-card text-white', theme === 'night' ? 'blog-card_dark' : '')}
                    style={{
                        // backgroundImage: `url(${post.node.frontmatter.thumbnail})`,
                        // backgroundSize: 'cover',
                        // backgroundPosition: "center",
                        background: randomColor({
                            luminosity: theme === 'day' ? 'dark' : 'light',
                            format: 'rgba',
                            alpha: 0.5, 
                        })
                    }}
                >
                    <Card.Body className={classNames({
                        'blog-card_text' : theme === 'day',
                        'blog-card_text_dark' : theme === 'night',
                    })}>
                        <Card.Title>
                            <h3>{post.node.frontmatter.title}</h3>
                        </Card.Title>
                        <Card.Text>
                            {post.node.frontmatter.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </AniLink>
        </div>
    );

    return cardView;
};

const mapStateToProps = state => ({
    theme: state.theme.theme,
});

export default connect(mapStateToProps, {})(BlogCardContainer);
