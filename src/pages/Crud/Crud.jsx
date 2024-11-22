import { Button, Form } from 'react-bootstrap';


const Crud = () => {
    return (
        <>
            <div className=' w-75 m-5'>
                <Form>
                    <Form.Group className="mb-3" controlId="nameDoctor">
                        <Form.Label>Nombre del Doctor</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese Nombre" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="namePaciente">
                        <Form.Label>Nombre del Paciente</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese Nombre del paciente" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="namePaciente">
                        <Form.Label>Sintomas</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="diagnostico">
                        <Form.Select aria-label="Seleccione una opcion">
                            <option>Seleccione el diagnostico</option>
                            <option value="1">Resfriado común</option>
                            <option value="2">Bronquiolitis</option>
                            <option value="3">Gastroenteritis</option>
                        </Form.Select>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    );
}

export default Crud;