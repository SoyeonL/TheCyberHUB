import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import {
    Header,
    LabRoomContainer,
    LabTitle,
    StartLabButton,
    Description,
    SolutionHeader,
    SolutionTitle,
    SolutionHolder,
    SolutionItem,
    SolutionIndex,
    SolutionText,
    DescriptionSection,
    SolutionSection,
} from "./LabsRoomElement";
import SubmissionBox from "../SubmissionBox";
import { ImLab } from "react-icons/im";
import { LabIcon } from "../../WebSecurityTopics/SubTopic";
import { HintContainer, HintIcon, SolutionContainer } from "../HintElements";
import { RiLightbulbFlashFill, RiLightbulbFlashLine } from "react-icons/ri";
import SyntaxHighlight from "../SyntaxHighlight";
import { toast } from "react-toastify";

const Room = ({ roomData }) => {
    const { "*": path, id } = useParams();
    const roomType = path.split("/")[0];
    const data = roomData[id - 1];
    const [hidden, setHidden] = useState(0);
    const [userInput, setUserInput] = useState("");
    const correctAnswer = data?.answer;
    const [showHint, setShowHint] = useState(false);

    console.log(correctAnswer);

    const handleSubmitAnswer = () => {
        if (userInput === correctAnswer) {
            toast("Correct answer. Well done!", {
                type: "success",
                position: "top-right",
                autoClose: 3000,
            });
        } else {
            alert("Incorrect answer. Please try again.");
        }
    };

    return (
        <LabRoomContainer>
            <DescriptionSection>
                <Header>
                    <LabTitle>{data.title}</LabTitle>
                </Header>
                <Description>{data.description}</Description>
                {data?.code && data?.language && <SyntaxHighlight language={data?.language} code={data?.code} />}
            </DescriptionSection>
            <SolutionSection>
                {roomType === "labs" && (
                    <StartLabButton href={data.labLink} target="_blank" rel="noreferrer">
                        Start Lab
                        <LabIcon style={{ border: "1px black solid" }}>
                            <ImLab />
                        </LabIcon>
                    </StartLabButton>
                )}

                {roomType === "labs" && <SubmissionBox submitType={"flag"} />}

                {roomType === "crack-me" && (
                    <SubmissionBox submitType={"answer"} onSubmit={handleSubmitAnswer} setUserInput={setUserInput} />
                )}

                <HintContainer onClick={() => setShowHint(!showHint)}>
                    Show Hint
                    <HintIcon>{showHint ? <RiLightbulbFlashFill /> : <RiLightbulbFlashLine />}</HintIcon>
                </HintContainer>

                {showHint && (
                    <div>
                        {data?.hint && data?.hint.length > 0 ? (
                            <SolutionHolder>
                                <SolutionItem>
                                    <SolutionText> {data?.hint} </SolutionText>
                                </SolutionItem>
                            </SolutionHolder>
                        ) : (
                            <SolutionItem>
                                <SolutionText>No hint available</SolutionText>
                            </SolutionItem>
                        )}
                    </div>
                )}

                <SolutionContainer>
                    <SolutionHeader onClick={() => setHidden((prevHidden) => (prevHidden === 0 ? 1 : 0))}>
                        <SolutionTitle>Solution</SolutionTitle>
                        <HintIcon>{hidden === 0 ? <FaAngleDown /> : <FaAngleUp />}</HintIcon>
                    </SolutionHeader>
                    {hidden === 1 && (
                        <SolutionHolder id="SolutionHolder">
                            {data?.solution && data?.solution.length > 0 ? (
                                data?.solution?.map((data, index) => (
                                    <SolutionItem key={index}>
                                        <SolutionIndex>{index + 1}.</SolutionIndex>
                                        <SolutionText>{data}</SolutionText>
                                    </SolutionItem>
                                ))
                            ) : (
                                <SolutionItem>
                                    <SolutionText>No solution available</SolutionText>
                                </SolutionItem>
                            )}
                        </SolutionHolder>
                    )}
                </SolutionContainer>
            </SolutionSection>
        </LabRoomContainer>
    );
};

export default Room;
