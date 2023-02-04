import styled from "styled-components";

export const ProfileViewContainer = styled.div`
  padding: 20px;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 30% 40% 30%;
`;

export const ProfileSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const PersonalInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  color: white;

  span {
    a {
      color: white;
    }
  }
`;

export const PictureContainer = styled.div`
  width: 125px;
  height: 125px;
  border-radius: 50%;
  border-width: 5px;
  border-color: white;
  overflow: hidden;
  align-self: center;
  justify-self: center;

  img {
    all: unset;
    width: 100%;
    height: auto;
  }
`;

export const NameAndRole = styled.div`
  flex-grow: 1;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    position: relative;
    svg {
      height: 20px;
      width: 20px;
      position: absolute;
    }
  }
`;

export const ListsContainer = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;

  h2 {
  }

  ul {
    list-style: none;
    padding-left: 15px;
    display: flex;
    flex-direction: column;

    li {
      div {
        display: flex;
        flex-direction: column;

        span {
          font-size: 12px;
        }
      }
    }
  }
`;

export const Description = styled.p`
  font-size: 13px;
`;

export const ExperienceSection = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

export const SkillSection = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
`;
