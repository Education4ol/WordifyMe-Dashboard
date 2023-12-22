import React from "react";

const CategoryDrawrer = () => {
  return (
    <div>
      <Drawer
        title="Edit Category"
        placement="right"
        size="large"
        onClose={() => {
          props.setOpenDrawer(false);
        }}
        open={props.openDrawer}
        extra={
          <Space>
            <Button
              onClick={() => {
                props.setOpenDrawer(false);
              }}
            >
              Cancel
            </Button>
            <Button
              type="primary"
              onClick={() => {
                props.setOpenDrawer(false);
              }}
            >
              OK
            </Button>
          </Space>
        }
      >
        <div className="drawer-content-wrapper">
          <div className="drawer-content-edit">
            <label htmlFor="category_name">Category Name</label>
            <Input
              placeholder={props.category.name}
              id="category_name"
              name="category_name"
              onChange={(e) => {
                editCategoryName(e);
              }}
            />
          </div>
          <div className="drawer-content-edit">
            <label htmlFor="total_words">Total Words</label>
            <Input
              placeholder={props.category.totalWords}
              id="total_words"
              name="total_words"
              onChange={(e) => {
                editTotalWords(e);
              }}
            />
          </div>
          <div className="drawer-content-edit">
            <label htmlFor="premium">Premium</label>
            <Select
              defaultValue={false}
              style={{
                width: 120,
              }}
              onChange={() => editIsPremium(value)}
              options={[
                {
                  value: false,
                  label: "False",
                },
                {
                  value: true,
                  label: "True",
                },
              ]}
            />
          </div>
          <div className="drawer-content-edit">
            <label htmlFor="completed">Completed</label>
            <Select
              defaultValue={false}
              style={{
                width: 120,
              }}
              onChange={() => editIsCompleted(value)}
              options={[
                {
                  value: false,
                  label: "False",
                },
                {
                  value: true,
                  label: "True",
                },
              ]}
            />
          </div>
          <div className="drawer-content-edit">
            <label htmlFor="completed">Tags</label>

            {editTags.map((tag, index) => {
              return (
                <Input
                  placeholder={tag}
                  id="total_words"
                  name="total_words"
                  onChange={(e) => handleEditTagName(e, index)}
                />
              );
            })}
          </div>
          <Button type="primary" onClick={addTags} style={{ width: "120px" }}>
            Add Tags
          </Button>
          <label htmlFor="wordlist"> WordsList</label>
          <div className="drawer-content-edit">
            {editWordList.map((word, index) => {
              return (
                <>
                  <label htmlFor="isKnown">is Known</label>
                  <Input
                    id="isKnown"
                    name="isKnown"
                    placeholder={word.isKnown}
                    onChange={(e) => {
                      editIsKnown(e, index);
                    }}
                  />
                  <label htmlFor="word">Word</label>
                  <Input
                    id="word"
                    name="word"
                    placeholder={word.word}
                    onChange={(e) => {
                      editWord(e, index);
                    }}
                  />
                  <label htmlFor="useCase">Use Case</label>
                  <Input
                    id="useCase"
                    name="useCase"
                    placeholder={word.use_case}
                    onChange={(e) => {
                      editUseCase(e, index);
                    }}
                  />
                  <label htmlFor="meaning">Meaning</label>
                  <Input
                    id="meaning"
                    name="meaning"
                    placeholder={word.meaning}
                    onChange={(e) => editMeaning(e, index)}
                  />
                </>
              );
            })}
            <Button
              type="primary"
              onClick={addWords}
              style={{ width: "120px" }}
            >
              Add Word
            </Button>
          </div>
          <div className="drawer-content-edit-button">
            <Button onClick={onConfirmEdit}>Confirm</Button>
            <Button onClick={props.onSaveEdit}>Save</Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default CategoryDrawrer;
