import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ReactCountryFlag from "react-country-flag";

const STabs = styled(Tabs)`
    width: 63%;
    margin-top: 6%;
    /* max-height: 40vh; */
    height: auto;
    position: relative;
`;

const STabList = styled(TabList)`
    /* display: flex; */
    width: 100%;
    display: grid;
    grid-template-columns: 29% 29%;
    height: 35px;
    &::after {
        content: '';
        height: 1px;
        width: 100%;
        position: absolute;
        top: 41px;
        left: 0;
        background: -moz-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 48%, rgba(255,255,255,0.02) 99%, rgba(255,255,255,0) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(left, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 48%,rgba(255,255,255,0.02) 99%,rgba(255,255,255,0) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 48%,rgba(255,255,255,0.02) 99%,rgba(255,255,255,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    }
`;

STabList.tabsRole = "TabList";

const STab = styled(Tab)`
    height: 35px;
    padding: 8px 15px 32px 15px;
    cursor: pointer;
    /* transition: border-bottom 0.1s linear; */
    box-sizing: border-box;
    font-size: 15px;
    color: rgba(255, 255, 255, 0.6);
    display: flex;
    justify-content: center;
    align-self: center;
    &.is-selected {
        height: 35px;
        border-bottom: 2px solid rgba(255, 255, 255, 0.8);
        color: rgba(255, 255, 255, 0.9);
    }
`;

STab.tabsRole = "Tab";

const STabPanel = styled(TabPanel)`
    display: none;
    padding: 20px 10px;
    background-color: transparent;
    height: auto;
    &.is-selected {
        display: block;
    }
`;

STabPanel.tabsRole = "TabPanel";

const ProductionContainer = styled.div`
    padding: 36px 10px 10px 10px;
`;

const TitleInfo = styled.span`
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.05em;
    color: rgba(255, 255, 255, 0.6);
`;

const CompaniesContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 30px;
`;

const Company = styled.div`
    height: 60px;
    width: 30%;
    background: no-repeat center/50% url(${(props) => props.bgUrl});
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    background-size: contain;
    border-radius: 3px;
    background-color: rgba(255, 255, 255, 0.3);
    &:first-child {
        margin-left: 0;
    }
`;

const TextInfo = styled.p`
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
`;

const CountriesWrap = styled.div`
    margin-top: 30px;
`;

const CountriesContainer = styled.div`
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 20px;
    padding-left: 20px;
    position: relative;
    &:first-child {
        margin-left: 0;
        padding-left: 0;
    }
    &::after {
        content: '';
        width: 1px;
        height: 10px;
        position: absolute;
        right: 0;
        margin-right: -20px;
        background-color: rgba(255, 255, 255, 0.5);
    }
    &:last-child {
        &::after {
            display: none;
        }
    }
`;

const CountryName = styled.span`
    font-size: 14px;
    margin-left: 7px;
    color: rgba(255, 255, 255, 0.8);
`;

const TabPresenter = ({result}) =>
    <STabs selectedTabClassName="is-selected" selectedTabPanelClassName="is-selected">
        <STabList>
            <STab>Production</STab>
            <STab>Production Countries</STab>
        </STabList>
        <STabPanel>
            <ProductionContainer>
                <TitleInfo>Production Companies</TitleInfo>
                <CompaniesContainer>
                    {result.production_companies &&
                        result.production_companies.length > 0 ?
                        result.production_companies.map((company, index) =>
                            <Company bgUrl={company.logo_path ?
                                `https://image.tmdb.org/t/p/w300${company.logo_path}` : `/`}>
                                {company.logo_path ? <TextInfo></TextInfo> : <TextInfo>{company.name}</TextInfo>}
                            </Company>
                        ) : "None"
                    }
                </CompaniesContainer>
            </ProductionContainer>
        </STabPanel>
        <STabPanel>
            <ProductionContainer>
                <TitleInfo>Production Countries</TitleInfo>
                <CountriesWrap>
                    {result.production_countries &&
                        result.production_countries.length > 0 ?
                        result.production_countries.map((country, index) =>
                            <CountriesContainer>
                                <ReactCountryFlag 
                                    countryCode={country.iso_3166_1}
                                    svg
                                    style={{width: '30px', height: '30px', borderRadius: '15px', backgroundColor: '#fff'}}
                                    title={country.iso_3166_1}/>
                                <CountryName>{country.name}</CountryName>
                            </CountriesContainer>
                        ) : "None"
                    }
                </CountriesWrap>
            </ProductionContainer>
        </STabPanel>
    </STabs>

TabPresenter.propTypes = {
    result:PropTypes.object
};

export default TabPresenter;