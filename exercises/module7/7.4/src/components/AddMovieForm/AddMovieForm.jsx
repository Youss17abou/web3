import { useOutletContext } from "react-router-dom";
import { Form, Input, InputNumber, Button } from "antd";
import "./AddMovieForm.css";

const AddMovieForm = () => {
  const { onMovieAdded } = useOutletContext();

  const onFinish = (values) => {
    onMovieAdded(values);
  };

  return (
    <Form
      name="add_movie"
      layout="vertical"
      onFinish={onFinish}
      style={{ maxWidth: 600, margin: "0 auto", padding: "1rem", border: "1px solid #ddd", borderRadius: "8px", backgroundColor: "#f9f9f9", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
    >
      <Form.Item
        name="title"
        label="Titre"
        rules={[{ required: true, message: "Veuillez entrer le titre du film" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="director"
        label="Réalisateur"
        rules={[{ required: true, message: "Veuillez entrer le réalisateur du film" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="duration"
        label="Durée"
        rules={[{ required: true, message: "Veuillez entrer la durée du film" }]}
      >
        <InputNumber min={0} />
      </Form.Item>
      <Form.Item
        name="imageUrl"
        label={"URL de l'image"}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        name="budget"
        label="Budget"
      >
        <InputNumber min={0} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Ajouter
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddMovieForm;
