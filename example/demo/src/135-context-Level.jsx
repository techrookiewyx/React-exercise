import ContextSection from "./135-context-Section";
import ContextHeading from "./135-context-Heading";
export default function ContextLevel() {
  return (
    <>
      <ContextSection level={1}>
        <ContextHeading>主标题</ContextHeading>
        <ContextSection level={2}>
          <ContextHeading>副标题</ContextHeading>
          <ContextHeading>副标题</ContextHeading>
          <ContextHeading>副标题</ContextHeading>
          <ContextSection level={3}>
            <ContextHeading>子标题</ContextHeading>
            <ContextHeading>子标题</ContextHeading>
            <ContextHeading>子标题</ContextHeading>
            <ContextSection level={4}>
              <ContextHeading>子子标题</ContextHeading>
              <ContextHeading>子子标题</ContextHeading>
              <ContextHeading>子子标题</ContextHeading>
            </ContextSection>
          </ContextSection>
        </ContextSection>
      </ContextSection>
    </>
  );
}
