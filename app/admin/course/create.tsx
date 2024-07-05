import { Datagrid, List, TextInput, SimpleForm, Create } from "react-admin";

export const CourseCreate = () => {
  return (
    <Create>
      <SimpleForm>

        <TextInput source="title" label="Title" />
        <TextInput source="imageSrc" label="Image" />
      </SimpleForm>
    </Create>
  )
} 