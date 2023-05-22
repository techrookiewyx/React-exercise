import Section from "./133-propsLevel-Section";
import Heading from "./133-propsLevel-Heading";
export default function PropsLevelTwo() {
  return (
    <>
      <Section>
        <Heading level={1}>主标题</Heading>
        <Section>
          <Heading level={2}>副标题</Heading>
          <Heading level={2}>副标题</Heading>
          <Heading level={2}>副标题</Heading>
          <Section>
            <Heading level={3}>子标题</Heading>
            <Heading level={3}>子标题</Heading>
            <Heading level={3}>子标题</Heading>
            <Section>
              <Heading level={4}>子子标题</Heading>
              <Heading level={4}>子子标题</Heading>
              <Heading level={4}>子子标题</Heading>
            </Section>
          </Section>
        </Section>
      </Section>
    </>
  );
}
