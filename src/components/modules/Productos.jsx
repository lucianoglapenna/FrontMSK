import { Fragment, useEffect } from "react"

import { getProducts } from '../../services/productsService'

import { ModuleTitle, ModuleSection } from "../BasicModule"
import Table from "../Table"


const tableColumns = [
    {
        id: 0,
        key: "codigo",
        name: "Codigo"
    },
    {
        id: 1,
        key: "descripcion",
        name: "Descripcion"
    },
    {
        id: 2,
        key: "cantidad",
        name: "Cantidad"
    },
    {
        id: 3,
        key: "kilos",
        name: "Kilos"
    },
    {
        id: 4,
        key: "precio",
        name: "Precio"
    },

]

const Productos = () => {

    const moduleName = "Productos"

    return (
        <Fragment>
            <ModuleTitle text="Productos" />

            <div className="accordion custom-accordion" id={`accordion${moduleName}`}>
                <ModuleSection
                    i={0}
                    sectionName="Listado"
                    section={ <Table 
                                tableColumns={tableColumns}
                                handleGetData={getProducts}/> }
                    moduleName={moduleName}>
                </ModuleSection>
            </div>

        </Fragment>
    );
}

export default Productos;