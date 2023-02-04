import React, { useContext } from "react";
import { ColorPallete } from "../../../constants/styles";
import { AppContext } from "../../../core/context/app-provider";
import ScrollView from "../../templates/scroll_view";
import {
  Description,
  ExperienceSection,
  ListsContainer,
  NameAndRole,
  PersonalInfo,
  PictureContainer,
  ProfileSection,
  ProfileViewContainer,
  SkillSection,
} from "./style";
import { ReactComponent as LinkedInLogo } from "../../../assets/linkedin.svg";
import {
  getMonthYearFormat,
  sortCollectionByDate,
} from "../../../core/services/date";

const ProfileScrollView = () => {
  const { profile } = useContext(AppContext);

  return (
    <ScrollView id="profile" bgColor={ColorPallete.secundary_dark}>
      <ProfileViewContainer>
        <ProfileSection>
          <PersonalInfo>
            <PictureContainer>
              <img
                src={profile?.personalInfo.image}
                alt={profile?.personalInfo.firstname}
              />
            </PictureContainer>
            <NameAndRole>
              <h1>{profile?.personalInfo.role}</h1>
              <h3>{`${profile?.personalInfo.firstname} ${profile?.personalInfo.lastname}`}</h3>
              <h4>{profile?.personalInfo.location}</h4>
              <span>
                <a
                  href={
                    profile?.personalInfo.socials.find(
                      (x) => x.name === "linkedin"
                    )?.link
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                  <LinkedInLogo />
                </a>
              </span>
            </NameAndRole>
          </PersonalInfo>
        </ProfileSection>
        <ExperienceSection>
          <ListsContainer>
            <h2>Education</h2>
            <ul>
              {sortCollectionByDate(profile?.knowledge.education).map(
                (education, idx) => {
                  return (
                    <li key={idx}>
                      <div>
                        <p>
                          <strong>{education.name}</strong> &#183;{" "}
                          {education.field}
                        </p>
                        <span>
                          {getMonthYearFormat(education.start)} -{" "}
                          {getMonthYearFormat(education.end)}
                        </span>
                      </div>
                      <Description>{education.description}</Description>
                      <br />
                    </li>
                  );
                }
              )}
            </ul>
          </ListsContainer>
          <ListsContainer>
            <h2>Work Experience</h2>
            <ul>
              {sortCollectionByDate(profile?.knowledge.work).map(
                (work, idx) => {
                  return (
                    <li key={idx}>
                      <div>
                        <p>
                          <strong>{work.company}</strong> &#183; {work.role}
                        </p>
                        <span>
                          {getMonthYearFormat(work.start)} -{" "}
                          {getMonthYearFormat(work.end)}
                        </span>
                      </div>
                      <Description>{work.technologies.join(" | ")}</Description>
                      <br />
                    </li>
                  );
                }
              )}
            </ul>
          </ListsContainer>
        </ExperienceSection>
        <SkillSection>
          <ListsContainer>
            <h2>Languages</h2>
            <ul>
              {profile?.skills.languages.map((language, index) => {
                return <li key={index}>{language}</li>;
              })}
            </ul>
          </ListsContainer>

          <ListsContainer>
            <h2>Soft Skills</h2>
            <ul>
              {profile?.skills.softSkills.map((softSkill, index) => {
                return <li key={index}>{softSkill}</li>;
              })}
            </ul>
          </ListsContainer>
          <ListsContainer>
            <h2>Skills</h2>
            <ul>
              {profile?.skills.hardSkills.map((skill, index) => {
                return <li key={index}>{skill}</li>;
              })}
            </ul>
          </ListsContainer>
        </SkillSection>
      </ProfileViewContainer>
    </ScrollView>
  );
};

export default ProfileScrollView;
