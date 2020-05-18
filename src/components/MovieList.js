import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { List } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';

import './Movies.css';


const MovieList = (props) => (
             
                <div className="movie-app">
                    <h3>Click On the image to see details</h3>
                    <label>Order By</label>
                    <Dropdown
                        className="dropdown-movie"
                        placeholder='Select Order'
                        fluid
                        selection
                        options={props.getOptions(props.movies)}
                        onChange={(e, { value }) => props.handleSelect(e, value)}
                    />
    
                    <div className="movie-card">
                        {props.movieList && props.movieList
                            .map((movie1, key) => {
                                return (
    
                                    <div key={key} className="image-list">
                                        <Image src={movie1.imageUrl} spaced={true}
                                        onClick={() => props.handleClick(movie1, key)} />
                                        {props.keyOfmovie === key &&
                                            <List>
                                                <List.Item>
                                                    <List.Header>Title</List.Header>
                                                    <List.Description>
                                                        {props.selectedMovie.title}
                                                    </List.Description>
                                                </List.Item>
                                                <List.Item>
                                                    <List.Header>Synopsis</List.Header>
                                                    <List.Description>
                                                        {props.selectedMovie.synopsis}
                                                    </List.Description>
                                                </List.Item>
                                                <List.Item>
                                                    <List.Header>Rank</List.Header>
                                                    <List.Description>
                                                        {props.selectedMovie.rank}
                                                    </List.Description>
                                                </List.Item>
                                                <List.Item>
                                                    <List.Header>Release Date</List.Header>
                                                    <List.Description>
                                                        {props.selectedMovie.releaseDate}
                                                    </List.Description>
                                                </List.Item>
                                            </List>
                                        }
                                    </div>
                                )
                            })}
    
                    </div>
    
                </div>
)
export default MovieList