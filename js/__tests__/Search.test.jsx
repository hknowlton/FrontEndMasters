import React from 'react';
import { shallow } from "enzyme"
import Search from '../Search'
import ShowCard from '../ShowCard';
import preload from '../../data.json'

describe('Search', () => {
    it('should render correctly', () => {
        const component = shallow(<Search />)
        expect(component).toMatchSnapshot();
    });

    it('renders all of the shows given no search term it', () => {
        const component = shallow(<Search/>)
        expect(preload.shows.length).toEqual(component.find(ShowCard).length);
    });

    it('should render correct amount of shows based on search term', () => {
        //simulated search word
        const searchWord = 'black';
        const component = shallow(<Search/>)
        //user types value in the search box
            //.find on any css selector or react component
                //simulate change event and pass this value into this event 
        component.find('input').simulate('change', {target: { value: searchWord}})
        //see how many shows it actually finds and save that count
            //change event fired the re-render/search
        const showCount = preload.shows
            .filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase())>=0).length
        //does the amount of show cards there match what we expected??
        expect(component.find(ShowCard).length).toEqual(showCount)
    });
});