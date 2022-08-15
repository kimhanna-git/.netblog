import { ContentState, convertToRaw, EditorState, Modifier } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


const TextEditor = ({ onChange, value } : any) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [updated, setUpdated] = useState(false);
  
    useEffect(() => {
      if (!updated) {
        const defaultValue = value ? value : "";
        const blocksFromHtml = htmlToDraft(defaultValue);
        const contentState = ContentState.createFromBlockArray(
          blocksFromHtml.contentBlocks,
          blocksFromHtml.entityMap
        );
        const newEditorState = EditorState.createWithContent(contentState);
        setEditorState(newEditorState);
      }
    }, [value]);
  
    const onEditorStateChange = (editorState : any) => {
      setUpdated(true);
      setEditorState(editorState);
      return onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    };
  
    const toolbar = {
      options: ["inline", "blockType", "list"],
      inline: {
        inDropdown: false,
        className: undefined,
        component: undefined,
        dropdownClassName: undefined,
        options: ["bold", "italic", "underline", "strikethrough"]
      },
      blockType: {
        inDropdown: true,
        options: ["Normal", "H1", "H2", "H3", "H4", "H5", "H6"]
      },
      list: {
        inDrodown: false,
        options: ["unordered", "ordered"]
      }
    };
  
    return (
      <React.Fragment>
        <div className="editor" style={{height: "500px" }}>
          <Editor
            spellCheck
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
            toolbar={toolbar}
          />
        </div>
      </React.Fragment>
    );
  };
  
  export default TextEditor;