//@des Get all contacts
//@route GET /api/contacts
//@acess public
const getContacts =  (req, res) => {
    res.status(200).json({msg: "Get all contacts"});
};

//@des Create new contacts
//@route POST /api/contacts
//@acess public
const CreateContact = (req, res) => {
    res.status(201).json({"msg": "Create Contacts"});
};

//@des Get contact
//@route GET /api/contacts/:id
//@acess public
const getContact =  (req, res) => {
    res.status(200).json({msg: `Get the contacts for ${req.params.id}`});
};

//@des Update contact
//@route PUT /api/contacts/:id
//@acess public
const updateContact =  (req, res) => {
    res.status(200).json({msg: `Update the contacts for ${req.params.id}`});
};

//@des Delete contact
//@route DELETE /api/contacts/:id
//@acess public
const deleteContact =   (req, res) => {
    res.status(200).json({"msg": `Delete contact for ${req.params.id}`});
};

module.exports = { getContacts, CreateContact, getContact, updateContact, deleteContact  }