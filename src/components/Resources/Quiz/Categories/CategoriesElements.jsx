import styled from "styled-components";

export const QuizSection = styled.div`
    min-height: 25em;
    margin: 40px auto;
    color: white;
    font-weight: 600;
    background: #090909;
    width: auto;
    max-width: calc(70rem - 75px);
    height: min-content;
    border-radius: 10px;
    padding: 30px 40px;
    box-shadow: 10px 10px 42px 0 rgba(0, 0, 0, 0.75);
    display: flex;

    @media screen and (max-width: 800px) {
        margin: 50px 30px;
    }
`;

export const ScoreSection = styled.div`
    width: 100%;
    display: inline-block;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 30px;
`;

export const ScoreInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 24px;
    margin: 0 0 30px 0;
`;

export const SkipButton = styled.button`
    margin: 3%;
    align-self: end;
    text-decoration: none;
    border-radius: 5px;
    border-width: 1px;
    border-style: solid;
    border-color: #343434;
    background: transparent;
    white-space: nowrap;
    padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
    font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
    outline: none;
    cursor: pointer;
    display: flex;

    align-items: center;
    transition: all 0.2s ease-in-out;
    color: #ff6b08;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: transparent;
        border-color: #343434;
        font-size: 18px;
    }
`;

export const ResetButton = styled.button`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 16px;
    color: #ffffff;
    background-color: #1a1c1d;
    border-radius: 5px;
    padding: 15px 0;
    border: 1px solid #545454;
    cursor: pointer;

    &:hover {
        background-color: #2c2f30;
    }
`;

export const QuizBody = styled.div`
    width: 100%;
`;

export const QuestionSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const QuizProgressIndicator = styled.div`
    width: 100%;
    height: 20px;
    margin: 5px 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
`;

export const ProgressBar = styled.progress`
    -webkit-appearance: none;
    width: 100%;
    height: 10px;
    grid-column: 1 / -1;

    ::-webkit-progress-bar {
        background-color: #fff;
        border-radius: 100px;
    }
    ::-webkit-progress-value {
        background-color: #ff6b07;
        border-radius: 100px;
    }
`;

export const QuestionCount = styled.div`
    font-size: 20px;
`;

export const QuestionText = styled.div`
    color: #cecac3;
    font-size: 1.2rem;
    font-weight: normal;
    width: 90%;
    margin: 10px 0 20px 0;
`;

export const AnswerSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const QuestionButton = styled.button`
    font-family: "Poppins", sans-serif;
    text-align: left;
    width: auto;
    font-size: 15px;
    color: #cecac3;
    background: #101010;
    border-radius: 5px;
    padding: 10px;
    margin: 7px 0;
    border: 1px solid #232323;
    border-bottom-width: 2px;
    cursor: pointer;
    transition: none;

    &:hover {
        background-color: #ff6b07;

        color: #000000;
    }

    &:active {
        background-color: #222;
        transform: scale(0.98);
    }
`;

export const CategoriesSection = styled.section`
    margin: 50px auto 0;
    color: #cecac3;
    width: auto;
    max-width: 70rem;
    padding: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > span {
        cursor: pointer;
        font-size: 1.5rem;

        @media screen and (min-width: 769px) {
            display: none;
        }
    }
`;

export const MobileCategories = styled(CategoriesSection)`
    background-color: #1a1c1d;
    border-radius: 1rem;

    box-shadow: 0 0 3px 1px #ff6b07;

    flex-direction: column;
    justify-content: start;
    max-width: fit-content;
    overflow-y: auto;
    height: fit-content;
    position: absolute;
    top: 4.5rem;
    left: 1rem;
    z-index: 1;

    & > button {
        width: 100%;
        margin: 0.5rem 0;
    }
`;

export const CategoriesButton = styled.button`
    background-color: transparent;
    border: 1px solid #232323;
    color: #cecac3;
    cursor: pointer;
    font-weight: bold;
    margin: 0 10px;
    padding: 10px;
    border-radius: 4px;
    letter-spacing: -0.03rem;
    transition: 0.3s ease;

    &:hover {
        background-color: #ff6b07;

        color: #000000;
    }

    &:active {
        transform: scale(0.9);
    }

    @media screen and (max-width: 768px) {
        display: ${(props) => (props.type === props.show ? "inline-block" : "none")};
    }
`;

export const CategoriesButtonMobile = styled(CategoriesButton)`
    @media screen and (max-width: 768px) {
        display: ${(props) => (props.type === props.show ? "none" : "inline-block")};
    }
`;
