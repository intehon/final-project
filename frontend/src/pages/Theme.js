import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { API_URL } from '../utils/constants'

const Theme = () => {

  const [theme, setTheme] = useState('')
  const getTheme = () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }
    fetch(API_URL('themes'), options)
    .then((res) => res.json())
    .then((json) => setTheme(json))
  }
  useEffect(() => {
    getTheme()
  }, [])

  return (
    <Wrapper>
        <HeaderContainer>
          {theme && <Header>{theme.response[0]?.name}</Header>}
        </HeaderContainer>
        <ContentWrapper>
          <ImageContainer>
              {theme && <ThemeImage src={theme.response[0]?.imageUrl} alt="current theme" />}
          </ImageContainer>
          <TextWrapper>
            <TextContainer>
                {theme && <p>{theme.response[0]?.description}</p>}
            </TextContainer>
          </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  ) 
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 900px;
`

const ContentWrapper = styled.div`
    display: flex;
    grid-gap: 1rem;
    align-items: center; // Maybe remove this?
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const TextContainer = styled.div`
    display: flex;
    padding: 8px;
    letter-spacing: 1px;
    max-width: 400px;
`

const ImageContainer = styled.div`
  text-align: center;

`

const ThemeImage = styled.img`
  display: inline-block;
  max-width: 400px;
  border-radius: 1%;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Header = styled.h1`
  font-size: 22px;
  text-transform: uppercase;
  font-style: italic;
  padding-bottom: 20px;
`

export default Theme