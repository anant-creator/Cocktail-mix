import React from 'react';
import Wrapper from '../assets/wrappers/SearchForm';
import { Form, useNavigation } from 'react-router-dom';


const SearchForm = ({searchTerm}) => {
  const navigate = useNavigation();
  const submitting = navigate.state === "submitting";
  return (
    <Wrapper>
      <Form className="form">
        <input type="search" name="search" className='form-input' defaultValue={searchTerm} id="search" />
        <button type="submit" className='btn' disabled={submitting}>
          {submitting ? "Searching..." : "Search"}
          </button>  
      </Form>
    </Wrapper>
  )
}

export default SearchForm