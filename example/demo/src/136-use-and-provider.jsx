import SectionUP from "./136-Section-use-prvide";
import HeadingU from "./136-heading-use";
export default function Page() {
  return (
    <>
      <SectionUP>
        <HeadingU>主标题</HeadingU>
        <SectionUP>
          <HeadingU>副标题</HeadingU>
          <HeadingU>副标题</HeadingU>
          <HeadingU>副标题</HeadingU>
          <SectionUP>
            <HeadingU>子标题</HeadingU>
            <HeadingU>子标题</HeadingU>
            <HeadingU>子标题</HeadingU>
            <SectionUP>
              <HeadingU>子子标题</HeadingU>
              <HeadingU>子子标题</HeadingU>
              <HeadingU>子子标题</HeadingU>
            </SectionUP>
          </SectionUP>
        </SectionUP>
      </SectionUP>
    </>
  );
}
