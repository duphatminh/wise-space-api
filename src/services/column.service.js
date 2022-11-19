import { ColumnModel } from '*/models/Column.model'
import { BoardModel } from '*/models/Board.model'

const createNew = async (data) => {
    try {
        // transaction mongodb (docx)
        const newColumn = await ColumnModel.createNew(data)
        // Update columnOrder Array in board collection
        await BoardModel.pushColumnOrder(newColumn.boardId.toString(), newColumn._id.toString())
        return newColumn
    } catch (error) {
        throw new Error(error)
    }
}

const update = async (id,data) => {
    try {
        const updateData = {
            ...data,
            updateAt: Date.now()
        }
        const result = await ColumnModel.update(id,updateData)
        return result
    } catch (error) {
        throw new Error(error)
    }
}

export const ColumnService = { 
    createNew,
    update
}