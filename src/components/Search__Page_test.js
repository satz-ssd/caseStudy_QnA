import { Card } from "react-bootstrap";

function Search__Page() {
  const data = [
    {
      Question: "How r u?",
      DifficultyLevel: "Expert",
      Answer: "i m fine",
    },
    {
      Question: "Question-2",
      DifficultyLevel: "Expert.......",
      Answer: "Answer",
    },
    {
      Question: "Question-3",
      Answer: "Answer",
      DifficultyLevel: "Expert.......",
    },
  ];
  return (
    <div>
      {data.map((data, index) => {
        return (
          <Card>
            {/* <Card.Header>{data.Question}</Card.Header> */}
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>{data.Question}</p>
                <p style={{ fontSize: "15px", marginBottom:"40px", fontFamily:"'Times New Roman', Times, serif"}}>{data.DifficultyLevel}</p>
                {/* <cite
                  title="Source Title"
                  style={{ fontSize: "15px", marginBottom:"40px" }}
                >
                  {data.DifficultyLevel}
                </cite> */}
                <p>{data.Answer}</p>

                {/* <footer className="blockquote-footer">
                </footer> */}
              </blockquote>
            </Card.Body>
          </Card>
        );
      })}

      {/* <Card body>This is some text within a card body.</Card> */}
    </div>
  );
}

export default Search__Page;
