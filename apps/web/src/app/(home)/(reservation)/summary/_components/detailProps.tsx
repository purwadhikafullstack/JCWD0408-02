export default function DetailProps(props: {
  detail: string;
  content: string;
}) {
  return (
    <div className="text-sm lg:text-base flex flex-col gap-1 w-max">
      <p className=" text-btn">{props.detail}</p>
      <p className="">{props.content}</p>
    </div>
  );
}
