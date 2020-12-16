import styled from "styled-components";

const GalleryCard = ({ preset }) => {
  return (
    <Card>
      <PresetDisplay preset={preset} />
    </Card>
  );
};

const Card = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 15px auto;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  box-shadow: 0 0 0 3px ${({ theme }) => theme.lightBlue};
  background-color: whitesmoke;

  cursor: pointer;

  &::before {
    content: "Choose preset";
    z-index: 999;
    position: absolute;

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: scale(0);

    border-radius: 5px;

    font-size: 2rem;

    color: ${({ theme }) => theme.darkBlue};
    background-color: rgba(200, 200, 200, 0.75);

    opacity: 0;
    visibility: hidden;
    transition: 300ms;
  }

  &:hover {
    &::before {
      transform: scale(1);
      opacity: 1;
      visibility: visible;
    }
  }
`;

const PresetDisplay = styled.div`
  width: 100px;
  height: 100px;

  transform: translate(-25%, -25%);

  background-color: ${({ theme }) => theme.lightBlue};
  box-shadow: ${(props) => props.preset};
`;

export default GalleryCard;
