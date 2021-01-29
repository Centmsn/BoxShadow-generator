import styled from "styled-components";
import PropTypes from "prop-types";

/**
 * Functional React component - wrapper for Gallery, PreviewSettings and Info.
 * @returns {JSX.Element}
 */
const Container = ({ visible, children }) => {
  return <Wrapper visible={visible}>{children}</Wrapper>;
};

Container.propTypes = {
  /**
   * Trigger component visibility
   */
  visible: PropTypes.bool.isRequired,
};

const Wrapper = styled.div.attrs(({ visible }) => ({
  style: {
    transform: visible ? "scale(1)" : "scale(0)",
  },
}))`
  position: absolute;
  top: 15%;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  border: ${({ theme }) => theme.others.border};
  border-radius: 5px;

  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.darkBlueTransparent};
  color: white;

  transition: 300ms;
  overflow-y: auto;
`;

export default Container;
